package com.thoughtworks.pulser.service;

import com.thoughtworks.pulser.model.Message;
import com.thoughtworks.pulser.repository.MessageRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;

@Service
public class MessageService {

  private MessageRepository messageRepository;

  public MessageService(MessageRepository messageRepository) {
    this.messageRepository = messageRepository;
  }

  public Message saveMessage(Message message) {
    return messageRepository.save(message);
  }

  public List<Message> findAllMessages() {
    return messageRepository.findAll();
  }

  public Optional<Message> findMessageById(String id) {
    return messageRepository.findById(id);
  }

  public void deleteAllMessages() {
    messageRepository.deleteAll();
  }

  public void deleteMessageById(String id) {
    messageRepository.deleteById(id);
  }


}
