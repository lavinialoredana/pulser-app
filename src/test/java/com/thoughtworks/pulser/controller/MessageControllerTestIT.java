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
public class MessageControllerTestIT extends AbstractTestNGSpringContextTests {

  @Autowired
  private MockMvc mockMvc;

  //TODO @Rebeca: You are not using these classes, which means they have no point in this integration test.
  //Don't forget the third step of red-green-refactor: refactoring also means reviewing the code to delete unused elements
  @MockBean
  private MessageService messageService;

  @MockBean
  private MessageRepository messageRepository;

  @Test
  void itShouldReturnOkWhenPostEndpointIsCalled() throws Exception{
    //TODO @Rebeca: inputBodyMessage -> body
    mockMvc.perform(MockMvcRequestBuilders.post("/messages/message").contentType(MediaType.APPLICATION_JSON_VALUE).content("{\n"
            + "    \"face\": \"AWESOME\",\n"
            + "    \"inputBodyMessage\": \"this is my fifth test message in my new database\"\n"
            + "}"))
        .andExpect(MockMvcResultMatchers.status().is(200));
  }

  @Test
  void itShouldReturnOkWhenGetAllEndpointIsCalled() throws Exception{
    mockMvc.perform(MockMvcRequestBuilders.get("/messages/all"))
        .andExpect(MockMvcResultMatchers.status().is(200));
  }

  @Test
  void itShouldReturnOkWhenGetByIdEndpointIsCalled() throws Exception{
    mockMvc.perform(MockMvcRequestBuilders.get("/messages/message/63c13ed223b39f48a6b5f024"))
        .andExpect(MockMvcResultMatchers.status().is(200));
  }

  @Test
  void itShouldReturnOkWhenDeleteAllEndpointIsCalled() throws Exception{
    mockMvc.perform(MockMvcRequestBuilders.delete("/messages/delete/all"))
        .andExpect(MockMvcResultMatchers.status().is(200));
  }

  @Test
  void itShouldReturnOkWhenDeleteByIdEndpointIsCalled() throws Exception{
    mockMvc.perform(MockMvcRequestBuilders.delete("/messages/delete/63c1378823b39f48a6b5f01d"))
        .andExpect(MockMvcResultMatchers.status().is(200));
  }



}