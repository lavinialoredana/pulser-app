package com.thoughtworks.pulser.model;

import static org.testng.Assert.*;
import com.thoughtworks.pulser.model.Message.Face;
import org.testng.annotations.Test;

public class MessageTest {

  private Message.Face face = Face.AWESOME;
  private String body = "This is a COMPLETE feedback message";
  Message message = new Message(face, body);

  @Test
  public void itShouldHaveFaceAndBody() {
    assertEquals(message.getFeedbackMessage(), "AWESOME" + " " + "This is a COMPLETE feedback message");
  }

  @Test
  public void itShouldHaveCreationTimeStamp() {
    assertNotNull(message.creationTimeStamp);
  }



}