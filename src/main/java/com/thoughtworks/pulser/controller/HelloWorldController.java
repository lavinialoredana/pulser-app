package com.thoughtworks.pulser.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {

    //TODO @Rebeca: Nuke this class and its test, these were just included as boilerplate code
    @GetMapping(value = "/hello")
    public String sayHello() {
        return "hello world!!!";
    }
}
