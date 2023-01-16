package com.thoughtworks.pulser.model;

import java.time.LocalDateTime;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "messages")
public class Message {

  @Id
  private ObjectId id;
  private String face;
  private String body;
  LocalDateTime creationTimeStamp;

  public Message(String face, String body) {
    this.face = face;
    this.body = body;
    this.creationTimeStamp = LocalDateTime.now();
  }

  public String getBody() { return body; }

  public ObjectId getId() {
    return id;
  }

  public String getFeedbackMessage() {
    return face + " " + body;
  }
}
