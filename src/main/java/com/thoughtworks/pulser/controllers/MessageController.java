package com.thoughtworks.pulser.controllers;

import com.thoughtworks.pulser.model.Message;
import com.thoughtworks.pulser.service.MessageService;
import java.util.List;
import java.util.Optional;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@AllArgsConstructor
@RestController
@RequestMapping("/pulserfeed")
public class MessageController {

  private final MessageService messageService;

  @PostMapping(value = "/message", produces = MediaType.APPLICATION_JSON_VALUE)
  public @ResponseBody ResponseEntity<Message> createMessage(@RequestBody Message message) {
    return new ResponseEntity<>(messageService.saveMessage(message), HttpStatus.OK.valueOf(200));
  }

  @GetMapping(value = "/messages", produces = MediaType.APPLICATION_JSON_VALUE)
  public @ResponseBody List<Message> findAllMessages() {
    return messageService.findAllMessages();
  }

  @GetMapping(value = "/messages/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
  public @ResponseBody Optional<Message> findMessage(@PathVariable String id) {
    return messageService.findMessageById(id);
  }

  @DeleteMapping(value = "/delete/messages")
  public void deleteAllMessages() {
    messageService.deleteAllMessages();
  }

  @DeleteMapping(value = "/delete/{id}")
  public void deleteMessageById(@PathVariable String id) {
    messageService.deleteMessageById(id);
  }

}
