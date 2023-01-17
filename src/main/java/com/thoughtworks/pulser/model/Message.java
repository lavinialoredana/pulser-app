package com.thoughtworks.pulser.model;

import java.time.LocalDateTime;
import java.util.InputMismatchException;
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
  private String id;
  private Face face;
  private String body;
  LocalDateTime createDate;
  private int like;
  private int dislike;
  private int report;

  public Message(Face face, String body) {
    this.face = face;
    this.body = body;
    this.createDate = LocalDateTime.now();
    this.like = getLike();
    this.dislike = getDislike();
    this.report = getReport();
  }

  public String getId() {
    return id;
  }

  public Face getFace() {
    return face;
  }

  public String getBody() { return body; }

  public LocalDateTime getCreateDate() {
    return createDate;
  }

  public int getLike() {
    return like;
  }

  public int getDislike() {
    return dislike;
  }

  public int getReport() {
    return report;
  }

  public void validateMessage(Message message) {
    if(message.getBody() == null) {
      throw new InputMismatchException("ERROR: Empty message body given");
    } else if(message.getBody().length() > 1400) {
      throw new InputMismatchException("ERROR: Message body given too long. It should be less than 1400 chars");
    }
  }

}
