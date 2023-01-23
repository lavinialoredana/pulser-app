package com.thoughtworks.pulser.controllers;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.testng.Assert.*;

import com.thoughtworks.pulser.model.Message;
import com.thoughtworks.pulser.model.Message.Face;
import com.thoughtworks.pulser.service.MessageService;
import java.util.List;
import java.util.Optional;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.testng.annotations.Test;

public class MessageControllerTest {

  private MessageService messageService = mock(MessageService.class);
  MessageController messageController = new MessageController(messageService);
  Message message = new Message(Face.AWESOME, "my message");


  @Test
  void itShouldReturnCreateMessageWhenMessageHasCorrectInformation() {
    when(messageService.saveMessage(message)).thenReturn(message);

    assertEquals(messageController.createMessage(message), new ResponseEntity<>(message, HttpStatus.OK.valueOf(200)));
  }

  @Test
  void itShouldReturnAllMessages() {
    Message message2 = new Message(Face.HAPPY, "my other message");

    when(messageService.findAllMessages()).thenReturn(List.of(message, message2));

    assertEquals(messageController.findAllMessages(), List.of(message, message2));
  }

  @Test
  void itShouldReturnMessageWhenIdGiven() {
    when(messageService.findMessageById(message.getId())).thenReturn(Optional.of(message));

    assertEquals(messageController.findMessage(message.getId()), Optional.of(message));
  }

  @Test
  void itShouldDeleteAllMessages() {
    messageController.deleteAllMessages();

    verify(messageService).deleteAllMessages();
  }

  @Test
  void itShouldDeleteMessageWhenIdGiven() {
    messageController.deleteMessageById(message.getId());

    verify(messageService).deleteMessageById(message.getId());
  }
}