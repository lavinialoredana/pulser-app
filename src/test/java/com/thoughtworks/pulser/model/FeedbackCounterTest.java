package com.thoughtworks.pulser.model;

import static org.testng.Assert.*;

import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

public class FeedbackCounterTest {

  private FeedbackCounter feedbackCounter;

  @BeforeMethod
  void setUp() {
    feedbackCounter = new FeedbackCounter();
  }

  @Test
  void itShouldInitialiseLikeCounterInZero() {
    assertEquals(feedbackCounter.getLikeCounter(), 0);
  }

  @Test
  void itShouldInitialiseDislikeCounterInZero() {
    assertEquals(feedbackCounter.getDislikeCounter(), 0);
  }

  @Test
  void itShouldIncreaseLikeCounter() {
    assertEquals(feedbackCounter.getLikeCounter(), 0);
    feedbackCounter.increaseLikeCounter();
    assertEquals(feedbackCounter.getLikeCounter(), 1);
    feedbackCounter.increaseLikeCounter();
    assertEquals(feedbackCounter.getLikeCounter(), 2);
    feedbackCounter.increaseLikeCounter();
    assertEquals(feedbackCounter.getLikeCounter(), 3);
  }

  @Test
  void itShouldIncreaseDislikeCounter() {
    assertEquals(feedbackCounter.getDislikeCounter(), 0);
    feedbackCounter.increaseDislikeCounter();
    assertEquals(feedbackCounter.getDislikeCounter(), 1);
    feedbackCounter.increaseDislikeCounter();
    assertEquals(feedbackCounter.getDislikeCounter(), 2);
    feedbackCounter.increaseDislikeCounter();
    assertEquals(feedbackCounter.getDislikeCounter(), 3);
  }

}