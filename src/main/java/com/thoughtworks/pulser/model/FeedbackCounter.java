package com.thoughtworks.pulser.model;

public class FeedbackCounter {

  private long likeCounter;
  private long dislikeCounter;
  private long reportCounter;

  public long getLikeCounter() {
    return likeCounter;
  }

  public long getDislikeCounter() {
    return dislikeCounter;
  }

  public long getReportCounter() {
    return reportCounter;
  }

  public void increaseLikeCounter() {
    likeCounter++;
  }

  public void increaseDislikeCounter() {
    dislikeCounter++;
  }

  public void increaseReportCounter() {
    reportCounter++;
  }
}
