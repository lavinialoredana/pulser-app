package com.thoughtworks.pulser.controller;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.testng.Assert.*;

import com.thoughtworks.pulser.model.Message;
import com.thoughtworks.pulser.model.Message.Face;
import com.thoughtworks.pulser.service.MessageService;
import java.util.List;
import java.util.Optional;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.testng.annotations.Test;

public class MessageControllerTest {

  private MessageService messageService = mock(MessageService.class);
  MessageController messageController = new MessageController(messageService);

  Message message = new Message(Face.AWESOME, "my message");
  Message message2 = new Message(Face.HAPPY, "my other message");

  @Test
  void itShouldReturnCreateMessageWhenMessageHasCorrectInformation() {
    when(messageService.saveMessage(message)).thenReturn(message);

    assertEquals(messageController.createMessage(message), new ResponseEntity<>(message, HttpStatusCode.valueOf(200)));
  }

  @Test
  void itShouldReturnAllMessages() {
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
    messageService.deleteAllMessages();

    verify(messageService).deleteAllMessages();
  }

  @Test
  void itShouldDeleteMessageWhenIdGiven() {
    messageService.deleteMessageById(message.getId());

    verify(messageService).deleteMessageById(message.getId());
  }
}