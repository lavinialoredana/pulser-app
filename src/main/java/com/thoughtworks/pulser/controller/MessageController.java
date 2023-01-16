package com.thoughtworks.pulser.controller;

import com.thoughtworks.pulser.model.Message;
import com.thoughtworks.pulser.repository.MessageRepository;
import com.thoughtworks.pulser.service.MessageService;
import java.util.InputMismatchException;
import java.util.List;
import java.util.Optional;
import org.bson.types.ObjectId;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/messages")
public class MessageController {

  private final MessageRepository messageRepository;
  private final MessageService messageService;

  //TODO @Rebeca: Lombok library can save you from manually creating constructors
  //TODO @Rebeca: A controller does never know about repositories, only about services.
  // Remove any repo reference from this class (of course doing TDD)
  public MessageController(MessageRepository messageRepository, MessageService messageService) {
    this.messageRepository = messageRepository;
    this.messageService = messageService;
  }

  //TODO @Rebeca: Review the naming: createMessage is a more clear name for this endpoint.
  // Also, newMessage is a weaker name than just message. Review naming in general
  @PostMapping(value = "/message", produces = MediaType.APPLICATION_JSON_VALUE)
  public @ResponseBody ResponseEntity<Message> addNewMessage(@RequestBody Message newMessage) {
    //TODO @Rebeca: I don't think there is a need of try-catching here
    Message savedMessage;
    try {
      savedMessage = messageService.saveMessage(newMessage);
    } catch (InputMismatchException e) {
      return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }
    return new ResponseEntity<>(savedMessage, HttpStatusCode.valueOf(200));
  }

  @GetMapping(value = "/all", produces = MediaType.APPLICATION_JSON_VALUE)
  public @ResponseBody List<Message> findAllMessages() {
    return messageService.findAllMessages();
  }

  @GetMapping(value = "/message/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
  public @ResponseBody Optional<Message> findMessage(@PathVariable String id) {
    return messageService.findMessageById(new ObjectId(id));
  }

  //TODO @Rebeca: deleteAllMessageS
  @RequestMapping(value = "/delete/all", method = RequestMethod.DELETE)
  public void deleteAllMessage() {
    messageService.deleteAllMessages();
  }

  @RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
  public void deleteMessageById(@PathVariable String id) {
    messageRepository.deleteById(new ObjectId(id));
  }

}
