package com.thoughtworks.pulser.controller;

import org.testng.annotations.Test;

import static org.testng.Assert.assertEquals;

public class HelloWorldControllerTest {

    @Test
    public void itShouldSalute() {
        assertEquals(new HelloWorldController().sayHello(), "hello world!!!");
    }

}