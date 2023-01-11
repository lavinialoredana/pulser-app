package com.thoughtworks.pulser.model;

public class FeedbackCounter {

  private long likeCounter;

  public long getLikeCounter() {
    return likeCounter;
  }

  public void increaseLikeCounter() {
    likeCounter++;
  }
}
