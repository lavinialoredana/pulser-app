package com.thoughtworks.pulser.controller;

import com.thoughtworks.pulser.repository.MessageRepository;
import com.thoughtworks.pulser.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.testng.AbstractTestNGSpringContextTests;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.testng.annotations.Test;

@WebMvcTest(MessageController.class)
public class MessageControllerTest extends AbstractTestNGSpringContextTests {

  @Autowired
  private MockMvc mockMvc;

  @MockBean
  private MessageService messageService;

  @MockBean
  private MessageRepository messageRepository;

  @Test
  void itShouldReturnOkWhenPostEndpointIsCalled() throws Exception{
    mockMvc.perform(MockMvcRequestBuilders.post("/messages/message").contentType(MediaType.APPLICATION_JSON_VALUE).content("{\n"
            + "    \"face\": \"AWESOME\",\n"
            + "    \"inputBodyMessage\": \"this is my fifth test message in my new database\"\n"
            + "}"))
        .andExpect(MockMvcResultMatchers.status().is(200));
  }




}