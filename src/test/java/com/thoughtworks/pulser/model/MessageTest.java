package com.thoughtworks.pulser.model;

import static org.testng.Assert.*;

import com.thoughtworks.pulser.model.Message.Face;
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

}