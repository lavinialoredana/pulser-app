package com.thoughtworks.pulser.model;

import java.time.LocalDateTime;
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

  public int getLike() {
    return like;
  }

  public int getDislike() {
    return dislike;
  }

  public int getReport() {
    return report;
  }

  public String getBody() { return body; }

  public Face getFace() {
    return face;
  }

  public String getId() {
    return id;
  }

}
