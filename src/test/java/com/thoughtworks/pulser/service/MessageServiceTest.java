package com.thoughtworks.pulser.service;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.testng.Assert.assertEquals;

import com.thoughtworks.pulser.model.Message;
import com.thoughtworks.pulser.model.Message.Face;
import com.thoughtworks.pulser.repository.MessageRepository;
import java.util.List;
import java.util.Optional;
import org.testng.annotations.Test;

public class MessageServiceTest {

  private MessageRepository messageRepository = mock(MessageRepository.class);
  private MessageService messageService = new MessageService(messageRepository);
  private Message message = new Message(Face.HAPPY, "my message");
  private Message message2 = new Message(Face.AWESOME, "my second message");

  @Test
  void itShouldSaveMessage() {
    when(messageRepository.save(message)).thenReturn(message);
    when(messageRepository.save(message2)).thenReturn(message2);

    assertEquals(messageService.saveMessage(message), message);
  }

  @Test
  void itShouldFindAllMessages() {
    when(messageRepository.findAll()).thenReturn(List.of(message, message2));

    assertEquals(messageService.findAllMessages(), List.of(message, message2));
  }

  @Test
  void itShouldFindMessageById() {
    when(messageRepository.findById(message.getId())).thenReturn(Optional.of(message));

    assertEquals(messageService.findMessageById(message.getId()), Optional.of(message));
  }

  @Test
  void itShouldDeleteAllMessages() {
    messageService.deleteAllMessages();

    verify(messageRepository).deleteAll();
  }

  @Test
  void itShouldDeleteMessageById() {
    messageService.deleteMessageById(message.getId());
    verify(messageRepository).deleteById(message.getId());
  }

}