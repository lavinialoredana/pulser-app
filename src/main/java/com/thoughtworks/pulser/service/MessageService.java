package com.thoughtworks.pulser.service;

import com.thoughtworks.pulser.model.Message;
import com.thoughtworks.pulser.repository.MessageRepository;
import java.util.InputMismatchException;
import java.util.List;
import java.util.Optional;
import org.bson.types.ObjectId;
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

  public Optional<Message> findMessageById(ObjectId id) {
    return messageRepository.findById(id);
  }

  public void validateMessage(Message message) {
    if(message.getInputBodyMessage() == null) {
      throw new InputMismatchException("ERROR: Empty message body given");
    } else if(message.getInputBodyMessage().length() > 1400) {
      throw new InputMismatchException("ERROR: Message body given too long. It should be less than 1400 chars");
    }
  }

}
