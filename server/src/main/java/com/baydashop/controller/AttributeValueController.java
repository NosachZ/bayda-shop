package com.baydashop.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.baydashop.model.AttributeValue;
import com.baydashop.repository.AttributeValueRepository;

@RestController
@RequestMapping("AttributeValue")
public class AttributeValueController {

  private final AttributeValueRepository repository;

  public AttributeValueController(AttributeValueRepository repository) {
    this.repository = repository;
  }  

  @RequestMapping("")
  public List<AttributeValue> entitiesByAttributes(@RequestParam("attributes") List<Long> attributesId) {
    List<AttributeValue> attributeValues = new ArrayList<AttributeValue>();
    for (Long attribute : attributesId) {
        attributeValues.addAll(repository.findByAttributeId(attribute));
    }
    return attributeValues;
  }
    
}
