package com.thoughtworks.pulser.model;

import static org.testng.Assert.*;

import com.thoughtworks.pulser.model.Message.Face;
import java.util.InputMismatchException;
import org.testng.annotations.Test;

public class MessageTest {

  private Message.Face face = Face.AWESOME;
  private String body = "my message body";
  Message message = new Message(face, body);

  @Test
  public void itShouldHaveCreationTimeStamp() {
    assertNotNull(message.createDate);
  }

  @Test
  public void itShouldReturnMessageStatistics() {
    assertEquals(message.getLike(), 0);
    assertEquals(message.getDislike(), 0);
    assertEquals(message.getReport(), 0);
  }

  @Test(expectedExceptions = InputMismatchException.class, expectedExceptionsMessageRegExp = "ERROR: Empty message body given")
  void itShouldThrowsExceptionWhenEmptyBodyMessage() {
    Message emptyBodyMessage = new Message(Face.AWESOME, null);

    message.validateMessage(emptyBodyMessage);
  }

  @Test(expectedExceptions = InputMismatchException.class, expectedExceptionsMessageRegExp = "ERROR: Message body given too long. It should be less than 1400 chars")
  void itShouldThrowsExceptionWhenBodyMessageLengthIsGreaterThan1400Chars() {
    Message longBodyMessage = new Message(Face.AWESOME,
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat ultricies ante non malesuada. Fusce ullamcorper interdum augue, et laoreet dolor euismod ut. Ut dictum ante eros, et dapibus urna vestibulum vel. Suspendisse eget diam mi. Donec consequat diam justo, eu interdum nisi laoreet elementum. Mauris consequat suscipit viverra. Suspendisse ac porta neque.Pellentesque aliquam vel metus sagittis blandit. Vivamus ut ipsum vel ex efficitur vestibulum eget ac felis. Vestibulum sagittis ac lacus sed tristique. Integer vulputate orci ut ornare commodo. Morbi eleifend consequat euismod. Sed sagittis leo enim, sit amet porttitor quam auctor in. Sed quis ultrices leo. Nullam posuere fringilla tortor, in aliquet urna viverra convallis. Integer sollicitudin nunc vel nisi placerat, non vestibulum lacus rutrum. Proin venenatis metus sit amet fermentum ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed maximus cursus massa, vitae ullamcorper ipsum fermentum eget. Sed fermentum massa eleifend scelerisque tempor.Nullam commodo eget dolor eget ultricies. Suspendisse at ornare tellus. Sed nec tincidunt erat, eget tincidunt tortor. Sed efficitur turpis nec diam iaculis, a volutpat purus tristique. Suspendisse et iaculis mi. Pellentesque semper lorem eget tortor vulputate, a dignissim nulla efficitur. Phasellus eu risus iaculis nullamj.");

    message.validateMessage(longBodyMessage);
  }

}