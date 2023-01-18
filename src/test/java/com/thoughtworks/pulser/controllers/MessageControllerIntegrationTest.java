package com.thoughtworks.pulser.controllers;

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
public class MessageControllerIntegrationTest extends AbstractTestNGSpringContextTests {

  @Autowired
  private MockMvc mockMvc;

  @MockBean
  private MessageService messageService;

  @Test
  void itShouldReturnOkWhenPostEndpointIsCalled() throws Exception{
    mockMvc.perform(MockMvcRequestBuilders.post("/pulserfeed/message").contentType(MediaType.APPLICATION_JSON_VALUE).content("{\n"
            + "    \"face\": \"AWESOME\",\n"
            + "    \"body\": \"this is my fifth test message in my new database\"\n"
            + "}"))
        .andExpect(MockMvcResultMatchers.status().is(200));
  }

  @Test
  void itShouldReturnOkWhenGetAllEndpointIsCalled() throws Exception{
    mockMvc.perform(MockMvcRequestBuilders.get("/pulserfeed/messages"))
        .andExpect(MockMvcResultMatchers.status().is(200));
  }

  @Test
  void itShouldReturnOkWhenGetByIdEndpointIsCalled() throws Exception{
    mockMvc.perform(MockMvcRequestBuilders.get("/pulserfeed/messages/63c13ed223b39f48a6b5f024"))
        .andExpect(MockMvcResultMatchers.status().is(200));
  }

  @Test
  void itShouldReturnOkWhenDeleteAllEndpointIsCalled() throws Exception{
    mockMvc.perform(MockMvcRequestBuilders.delete("/pulserfeed/delete/messages"))
        .andExpect(MockMvcResultMatchers.status().is(200));
  }

  @Test
  void itShouldReturnOkWhenDeleteByIdEndpointIsCalled() throws Exception{
    mockMvc.perform(MockMvcRequestBuilders.delete("/pulserfeed/delete/63c1378823b39f48a6b5f01d"))
        .andExpect(MockMvcResultMatchers.status().is(200));
  }



}