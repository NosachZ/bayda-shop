package com.baydashop.controller;

import com.baydashop.model.Attribute;
import com.baydashop.repository.AttributeRepository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("Attribute")
public class AttributeController {

  private final AttributeRepository repository;

  public AttributeController(AttributeRepository repository) {
    this.repository = repository;
  }

  @RequestMapping("")
  public List<Attribute> entityByCategoryChain(@RequestParam("categories") List<Long> categories) {
    List<Attribute> attrOfCategory = new ArrayList<Attribute>();
    for (Long category : categories) {
      attrOfCategory.addAll(repository.findAttributesByCategoriesId(category));
    }
    return attrOfCategory;
  }

    
}
