package com.thoughtworks.pulser.model;

import static org.testng.Assert.*;
import org.testng.annotations.Test;

public class MessageTest {

  private String face = "AWESOME";
  private String inputBodyMessage = "This is a COMPLETE feedback message";
  Message message = new Message(face, inputBodyMessage);

  @Test
  public void itShouldHaveFaceAndBody() {
    assertEquals(message.getFeedbackMessage(), "AWESOME" + " " + "This is a COMPLETE feedback message");
  }

  @Test
  public void itShouldHaveCreationTimeStamp() {
    assertNotNull(message.creationTimeStamp);
  }



}