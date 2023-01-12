package com.thoughtworks.pulser.service;

import com.thoughtworks.pulser.model.Message;
import com.thoughtworks.pulser.repository.MessageRepository;
import java.util.InputMismatchException;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class MessageService {

  private MessageRepository messageRepository;

  public MessageService(MessageRepository messageRepository) {
    this.messageRepository = messageRepository;
  }

  public Message saveMessage(Message message) throws InputMismatchException {
    return messageRepository.save(message);
  }

  public List<Message> findAllMessages() {
    return messageRepository.findAll();
  }

}
