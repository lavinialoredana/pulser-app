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
  private String inputBodyMessage;
  LocalDateTime creationTimeStamp;

  public Message(String face, String inputBodyMessage) {
    this.face = face;
    this.inputBodyMessage = inputBodyMessage;
    this.creationTimeStamp = LocalDateTime.now();
  }

  public String getUserMessage() { return inputBodyMessage; }

  public ObjectId getId() {
    return id;
  }

  public String getFeedbackMessage() {
    return face + " " + inputBodyMessage;
  }
}
