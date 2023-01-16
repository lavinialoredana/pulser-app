package com.thoughtworks.pulser.model;

import java.time.LocalDateTime;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "messages")
public class Message {

  @Id
  private ObjectId id; //TODO @Rebeca: Just a String would do the trick instead of ObjectId
  private String face; //TODO @Rebeca: Consider using an enum here so you can have full control of what goes into a "face"
  private String body;
  LocalDateTime creationTimeStamp; //TODO @Rebeca: createdDate is more typical

  //TODO @Rebeca: You are lacking the like, dislike and report counters here

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
