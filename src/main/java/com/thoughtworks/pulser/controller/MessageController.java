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

  public MessageController(MessageRepository messageRepository, MessageService messageService) {
    this.messageRepository = messageRepository;
    this.messageService = messageService;
  }

  @PostMapping(value = "/message", produces = MediaType.APPLICATION_JSON_VALUE)
  public @ResponseBody ResponseEntity<Message> addNewMessage(@RequestBody Message newMessage) {
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

  @RequestMapping(value = "/delete/all", method = RequestMethod.DELETE)
  public void deleteAllMessage() {
    messageService.deleteAllMessages();
  }


}
