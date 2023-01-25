package com.thoughtworks.pulser.controllers;

import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;

import com.thoughtworks.pulser.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.security.test.context.support.WithSecurityContextTestExecutionListener;
import org.springframework.test.context.TestExecutionListeners;
import org.springframework.test.context.testng.AbstractTestNGSpringContextTests;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.testng.annotations.Test;

@TestExecutionListeners({WithSecurityContextTestExecutionListener.class})
@WebMvcTest(MessageController.class)
public class MessageControllerIntegrationTest extends AbstractTestNGSpringContextTests {

  @Autowired
  private MockMvc mockMvc;

  @MockBean
  private MessageService messageService;

  @Test
  @WithMockUser(username = "user", password = "password", roles = "USER")
  void itShouldReturnOkWhenPostEndpointIsCalled() throws Exception{
    mockMvc.perform(MockMvcRequestBuilders.post("/pulserfeed/message").contentType(MediaType.APPLICATION_JSON_VALUE).content("{\n"
            + "    \"face\": \"AWESOME\",\n"
            + "    \"body\": \"this is my fifth test message in my new database\"\n"
            + "}").with(csrf()))
        .andExpect(MockMvcResultMatchers.status().is(200));
  }

  @Test
  @WithMockUser(username = "user", password = "password", roles = "USER")
  void itShouldReturnOkWhenGetAllEndpointIsCalled() throws Exception{
    mockMvc.perform(MockMvcRequestBuilders.get("/pulserfeed/messages"))
        .andExpect(MockMvcResultMatchers.status().is(200));
  }

  @Test
  @WithMockUser(username = "user", password = "password", roles = "USER")
  void itShouldReturnOkWhenGetByIdEndpointIsCalled() throws Exception{
    mockMvc.perform(MockMvcRequestBuilders.get("/pulserfeed/messages/63c13ed223b39f48a6b5f024"))
        .andExpect(MockMvcResultMatchers.status().is(200));
  }

  @Test
  @WithMockUser(username = "user", password = "password", roles = "USER")
  void itShouldReturnOkWhenDeleteAllEndpointIsCalled() throws Exception{
    mockMvc.perform(MockMvcRequestBuilders.delete("/pulserfeed/delete/messages").with(csrf()))
        .andExpect(MockMvcResultMatchers.status().is(200));
  }

  @Test
  @WithMockUser(username = "user", password = "password", roles = "USER_ROLE")
  void itShouldReturnOkWhenDeleteByIdEndpointIsCalled() throws Exception{
    mockMvc.perform(MockMvcRequestBuilders.delete("/pulserfeed/delete/63c1378823b39f48a6b5f01d").with(csrf()))
        .andExpect(MockMvcResultMatchers.status().is(200));
  }



}