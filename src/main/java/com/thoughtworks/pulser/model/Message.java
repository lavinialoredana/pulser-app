package com.thoughtworks.pulser.model;

import java.time.LocalDateTime;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "messages")
public class Message {

  public enum Face {
    AWESOME,
    HAPPY,
    SAD,
    AWFUL
  }

  @Id
  private ObjectId id;
  private Face face;
  private String body;
  LocalDateTime creationTimeStamp;

  public Message(Face face, String body) {
    this.face = face;
    this.body = body;
    this.creationTimeStamp = LocalDateTime.now();
  }

  public String getBody() {
    return body;
  }

  public ObjectId getId() {
    return id;
  }

  public String getFeedbackMessage() {
    return face + " " + body;
  }
}
