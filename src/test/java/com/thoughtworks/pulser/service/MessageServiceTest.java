package com.thoughtworks.pulser.service;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;
import static org.testng.Assert.*;

import com.thoughtworks.pulser.model.Message;
import com.thoughtworks.pulser.model.Message.Face;
import com.thoughtworks.pulser.repository.MessageRepository;
import java.util.InputMismatchException;
import java.util.List;
import java.util.Optional;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

public class MessageServiceTest {

  private MessageService messageService;

  private MessageRepository messageRepository;
  private Message message;
  private Message message2;
  private Message emptyBodyMessage;
  private Message messageLongBody;

  @BeforeMethod
  void setUp() {
    messageRepository = mock(MessageRepository.class);
    message = new Message(Face.HAPPY, "my message");
    message2 = new Message(Face.AWESOME, "my second message");
    emptyBodyMessage = new Message(Face.AWESOME, null);
    messageLongBody = new Message(Face.AWESOME, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat ultricies ante non malesuada. Fusce ullamcorper interdum augue, et laoreet dolor euismod ut. Ut dictum ante eros, et dapibus urna vestibulum vel. Suspendisse eget diam mi. Donec consequat diam justo, eu interdum nisi laoreet elementum. Mauris consequat suscipit viverra. Suspendisse ac porta neque.Pellentesque aliquam vel metus sagittis blandit. Vivamus ut ipsum vel ex efficitur vestibulum eget ac felis. Vestibulum sagittis ac lacus sed tristique. Integer vulputate orci ut ornare commodo. Morbi eleifend consequat euismod. Sed sagittis leo enim, sit amet porttitor quam auctor in. Sed quis ultrices leo. Nullam posuere fringilla tortor, in aliquet urna viverra convallis. Integer sollicitudin nunc vel nisi placerat, non vestibulum lacus rutrum. Proin venenatis metus sit amet fermentum ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed maximus cursus massa, vitae ullamcorper ipsum fermentum eget. Sed fermentum massa eleifend scelerisque tempor.Nullam commodo eget dolor eget ultricies. Suspendisse at ornare tellus. Sed nec tincidunt erat, eget tincidunt tortor. Sed efficitur turpis nec diam iaculis, a volutpat purus tristique. Suspendisse et iaculis mi. Pellentesque semper lorem eget tortor vulputate, a dignissim nulla efficitur. Phasellus eu risus iaculis nullamj.");
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

  @Test(expectedExceptions = InputMismatchException.class, expectedExceptionsMessageRegExp = "ERROR: Empty message body given")
  void itShouldThrowsExceptionWhenEmptyBodyMessage() {
    messageService.validateMessage(emptyBodyMessage);
  }

  @Test(expectedExceptions = InputMismatchException.class, expectedExceptionsMessageRegExp = "ERROR: Message body given too long \\(>1400 chars\\)")
  void itShouldThrowsExceptionWhenBodyMessageLengthIsGreaterThan1400Chars() {
    messageService.validateMessage(messageLongBody);
  }



}