package com.thoughtworks.pulser.model;

public class Message {
  private Face face;
  private String body;

  public Message(Face face, String body) {
    this.face = face;
    this.body = body;
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
