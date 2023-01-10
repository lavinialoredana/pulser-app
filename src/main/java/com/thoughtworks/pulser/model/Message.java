package com.thoughtworks.pulser.model;

import java.time.LocalDateTime;

public class Message {
  private Face face;
  private String body;
  LocalDateTime creationTimeStamp;

  public Message(Face face, String body) {
    this.face = face;
    this.body = body;
    this.creationTimeStamp = LocalDateTime.now();
  }

  public enum Face {
    AWESOME,
    HAPPY,
    SAD,
    AWFUL
  }

  public String getFeedbackMessage() {
    return face + " " + body;
  }
}
