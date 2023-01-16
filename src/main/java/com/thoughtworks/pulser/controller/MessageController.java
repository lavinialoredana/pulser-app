package com.thoughtworks.pulser.controller;

import com.thoughtworks.pulser.model.Message;
import com.thoughtworks.pulser.service.MessageService;
import java.util.List;
import java.util.Optional;
import lombok.AllArgsConstructor;
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

@AllArgsConstructor
@RestController
@RequestMapping("/messages")
public class MessageController {

  private final MessageService messageService;

  @PostMapping(value = "/message", produces = MediaType.APPLICATION_JSON_VALUE)
  public @ResponseBody ResponseEntity<Message> createMessage(@RequestBody Message message) {
    return new ResponseEntity<>(messageService.saveMessage(message), HttpStatusCode.valueOf(200));
  }

  @GetMapping(value = "/all", produces = MediaType.APPLICATION_JSON_VALUE)
  public @ResponseBody List<Message> findAllMessages() {
    return messageService.findAllMessages();
  }

  @GetMapping(value = "/message/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
  public @ResponseBody Optional<Message> findMessage(@PathVariable String id) {
    return messageService.findMessageById(id);
  }

  @RequestMapping(value = "/delete/all", method = RequestMethod.DELETE)
  public void deleteAllMessages() {
    messageService.deleteAllMessages();
  }

  @RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
  public void deleteMessageById(@PathVariable String id) {
    messageService.deleteMessageById(id);
  }

}
