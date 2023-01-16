package com.thoughtworks.pulser.model;

public class FeedbackCounter {

  //TODO @Rebeca: This class is probably not needed
  //TODO @Rebeca: No need of these counters to be long, just a plain int would do the trick

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
