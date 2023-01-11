package com.thoughtworks.pulser.model;

public class FeedbackCounter {

  private long likeCounter;
  private long dislikeCounter;

  public long getLikeCounter() {
    return likeCounter;
  }

  public long getDislikeCounter() {
    return dislikeCounter;
  }

  public void increaseLikeCounter() {
    likeCounter++;
  }

  public void increaseDislikeCounter() {
    dislikeCounter++;
  }
}
