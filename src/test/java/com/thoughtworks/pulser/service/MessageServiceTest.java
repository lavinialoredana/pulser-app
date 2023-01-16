package com.thoughtworks.pulser.service;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;
import static org.testng.Assert.assertEquals;

import com.thoughtworks.pulser.model.Message;
import com.thoughtworks.pulser.repository.MessageRepository;
import java.util.InputMismatchException;
import java.util.List;
import java.util.Optional;
import org.mockito.Mockito;
import org.testng.annotations.Test;

public class MessageServiceTest {

  private MessageRepository messageRepository = mock(MessageRepository.class);
  private MessageService messageService = new MessageService(messageRepository);
  private Message message = new Message("HAPPY", "my message");
  private Message message2 = new Message("AWESOME", "my second message");

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

    //TODO @Rebeca: All this class is a truly solid test, nice one! Just import Mockito so you don't have to call Mockito.<something> in the whole test
    Mockito.verify(messageRepository).deleteAll();
  }

  @Test
  void itShouldDeleteMessageById() {
    messageService.deleteMessageById(message.getId());
    Mockito.verify(messageRepository).deleteById(message.getId());
  }

  @Test(expectedExceptions = InputMismatchException.class, expectedExceptionsMessageRegExp = "ERROR: Empty message body given")
  void itShouldThrowsExceptionWhenEmptyBodyMessage() {
    Message emptyBodyMessage = new Message("AWESOME", null);

    messageService.validateMessage(emptyBodyMessage);
  }

  @Test(expectedExceptions = InputMismatchException.class, expectedExceptionsMessageRegExp = "ERROR: Message body given too long. It should be less than 1400 chars")
  void itShouldThrowsExceptionWhenBodyMessageLengthIsGreaterThan1400Chars() {
    Message longBodyMessage = new Message("AWESOME",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat ultricies ante non malesuada. Fusce ullamcorper interdum augue, et laoreet dolor euismod ut. Ut dictum ante eros, et dapibus urna vestibulum vel. Suspendisse eget diam mi. Donec consequat diam justo, eu interdum nisi laoreet elementum. Mauris consequat suscipit viverra. Suspendisse ac porta neque.Pellentesque aliquam vel metus sagittis blandit. Vivamus ut ipsum vel ex efficitur vestibulum eget ac felis. Vestibulum sagittis ac lacus sed tristique. Integer vulputate orci ut ornare commodo. Morbi eleifend consequat euismod. Sed sagittis leo enim, sit amet porttitor quam auctor in. Sed quis ultrices leo. Nullam posuere fringilla tortor, in aliquet urna viverra convallis. Integer sollicitudin nunc vel nisi placerat, non vestibulum lacus rutrum. Proin venenatis metus sit amet fermentum ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed maximus cursus massa, vitae ullamcorper ipsum fermentum eget. Sed fermentum massa eleifend scelerisque tempor.Nullam commodo eget dolor eget ultricies. Suspendisse at ornare tellus. Sed nec tincidunt erat, eget tincidunt tortor. Sed efficitur turpis nec diam iaculis, a volutpat purus tristique. Suspendisse et iaculis mi. Pellentesque semper lorem eget tortor vulputate, a dignissim nulla efficitur. Phasellus eu risus iaculis nullamj.");

    messageService.validateMessage(longBodyMessage);
  }



}