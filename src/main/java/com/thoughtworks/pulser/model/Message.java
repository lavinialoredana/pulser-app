package com.thoughtworks.pulser.model;

import java.time.LocalDateTime;

public class Message {

  enum Face {
    AWESOME,
    HAPPY,
    SAD,
    AWFUL
  }

  private Face face;
  private String body;
  LocalDateTime creationTimeStamp;

  public Message(Face face, String body) {
    this.face = face;
    this.body = body;
    this.creationTimeStamp = LocalDateTime.now();
  }

  public String getFeedbackMessage() {
    return face + " " + body;
  }
}
