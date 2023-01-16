package com.thoughtworks.pulser.repository;

import com.thoughtworks.pulser.model.Message;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MessageRepository extends MongoRepository<Message, ObjectId> { //TODO @Rebeca: <Message, String>

}
