package com.baydashop.controller;

import com.baydashop.model.Attribute;
import com.baydashop.model.Category;
import com.baydashop.repository.AttributeRepository;
import com.baydashop.repository.CategoryRepository;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("Category")
public class CategoryController {

  private final CategoryRepository repository;
  private final AttributeRepository attrRepository;

  public CategoryController(CategoryRepository repository, AttributeRepository attrRepository) {
    this.repository = repository;
    this.attrRepository = attrRepository;
  }

  @RequestMapping("all")
  public List<Category> allEntities() {
    return repository.findAll();
  }

  @RequestMapping("")
  public Category entityByName(@RequestParam("name") String name) {
    return repository.findByName(name);
  }

  @RequestMapping("{Id}")
  public Category entityById(@PathVariable("Id") long Id) {
    return repository.findById(Id).orElse(null);
  }

  @RequestMapping("{Id}/chain")
  public List<Category> chainEntities(@PathVariable("Id") long Id) {
    List<Category> chain = new ArrayList<>();
    Category curCategory = repository.findById(Id).orElse(null);
    chain.add(0, curCategory);
    while (curCategory.getParentCategory() != null) {
      curCategory = repository.findById(curCategory.getParentCategory()).orElse(null);
      chain.add(0, curCategory);
    }
    return chain;
  }

  @RequestMapping("root")
  public List<Category> entitiesByParentIdNull() {
    return repository.findByParentCategory(null);
  }

  @RequestMapping("{parentId}/children")
  public List<Category> entitiesByParent(@PathVariable("parentId") long parentId) {
    return repository.findByParentCategory(parentId);
  }

  @RequestMapping("{categoriesIds}/attributes")
  public List<Attribute> attributesByCategories(@PathVariable("categoriesIds") List<Long> categoriesIds) {
    // List<Long> t = categoriesIds;
    // Long i = categoriesIds.get(1);
    return attrRepository.findAttributesByCategoriesId(categoriesIds.get(0));
  }

  /* @RequestMapping("byParentID/")
  public List<Category> entitiesByParentNull() {
    //  Category probe = new Category();
    
    // probe.setParentCategory(parentId);
    // Example<Category> example = Example.of(probe);
    // return repository.findAll(example);
    return repository.findByParentCategory(null);
  } */
  
}
