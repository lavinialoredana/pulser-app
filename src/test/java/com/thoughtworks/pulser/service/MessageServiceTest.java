package com.thoughtworks.pulser.service;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;
import static org.testng.Assert.*;

import com.thoughtworks.pulser.model.Message;
import com.thoughtworks.pulser.model.Message.Face;
import com.thoughtworks.pulser.repository.MessageRepository;
import java.util.List;
import java.util.Optional;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

public class MessageServiceTest {

  private MessageService messageService;

  private MessageRepository messageRepository;
  private Message message;
  private Message message2;

  @BeforeMethod
  void setUp() {
    messageRepository = mock(MessageRepository.class);
    message = new Message(Face.HAPPY, "my message");
    message2 = new Message(Face.AWESOME, "my second message");
    when(messageRepository.save(message)).thenReturn(message);
    when(messageRepository.save(message2)).thenReturn(message2);
    when(messageRepository.findAll()).thenReturn(List.of(message, message2));
    when(messageRepository.findById(message.getId())).thenReturn(Optional.of(message));
    messageService = new MessageService(messageRepository);
  }

  @Test
  void itShouldSaveMessage() {
    assertEquals(messageService.saveMessage(message), message);
  }

  @Test
  void itShouldFindAllMessages() {
    assertEquals(messageService.findAllMessages(), List.of(message, message2));
  }

  @Test
  void itShouldFindMessageById() {
    assertEquals(messageService.findMessageById(message.getId()), Optional.of(message));
  }



}