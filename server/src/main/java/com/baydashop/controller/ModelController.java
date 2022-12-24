package com.baydashop.controller;

import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.baydashop.model.Attribute;
import com.baydashop.model.AttributeDataType;
import com.baydashop.model.AttributeFilterType;
import com.baydashop.model.AttributeType;
import com.baydashop.model.AttributeValueType;
import com.baydashop.model.Category;
import com.baydashop.model.Model;
import com.baydashop.model.ModelBasedAttribute;
import com.baydashop.repository.CategoryRepository;
import com.baydashop.repository.ModelBasedAttributeRepository;
import com.baydashop.repository.ModelRepository;

@RestController
@RequestMapping("Model")
public class ModelController {
  private final ModelRepository modelRepository;
  private final ModelBasedAttributeRepository modelBasedAttributeRepository;
  private final CategoryRepository categoryRepository;

  public ModelController(
    ModelRepository modelRepository, 
    ModelBasedAttributeRepository modelBasedAttributeRepository,
    CategoryRepository categoryRepository
  ) {
    this.modelRepository = modelRepository;
    this.modelBasedAttributeRepository = modelBasedAttributeRepository;
    this.categoryRepository = categoryRepository;
  }

  @RequestMapping("all")
  public List<Model> getEntities() {    
    return modelRepository.findAll();
  }

  @RequestMapping("")
  public Model getEntityByName(@RequestParam("name") String name) {    
    Model model = modelRepository.findByName(name);
    return model;
  }

  @RequestMapping("Category/{categoryName}")
  public Set<Model> getEntitiesByCategory(@PathVariable("categoryName") String categoryName/* @RequestParam("name") String name */) {    
    Category selectedCategory = categoryRepository.findByName(categoryName);
    Set<Long> categories = categoryRepository.findChildCategories(selectedCategory.getId());
    Set<Model> models = new HashSet<>();
    for (Long category : categories) {
      models.addAll(modelRepository.findModelsByCategoriesId(category));
    }
    return models;
  }

  @RequestMapping("modelBasedAttributes")
  public List<AttributeFilterType> getModelBasedAttributes(@RequestParam("category") long selectedCategory) {
    List<ModelBasedAttribute> handlerTable = modelBasedAttributeRepository.findAll();
    
    Set<Long> categories = categoryRepository.findChildCategories(selectedCategory);
    Set<Model> models = new HashSet<>();
    for (Long category : categories) {
      models.addAll(modelRepository.findModelsByCategoriesId(category));
    }

    List<AttributeFilterType> attributeData = new ArrayList<>();

    for (ModelBasedAttribute item : handlerTable) {
      switch (item.getType()) {
        case BOOLEAN:
          attributeData.add(getBooleanAttributeDataType(item));
          break;

        case NUMBER_RANGE:
          attributeData.add(getNumberrangeAttributeDataType(item, models));
          break;
      
        default:
          break;
      }
    }

    return attributeData;
  }

AttributeFilterType getBooleanAttributeDataType(ModelBasedAttribute item) {
  AttributeFilterType attrData = new AttributeFilterType();
  attrData.setAttribute(new AttributeDataType(null, item.getModelPropertyName(), item.getTitle(), item.getType(), item.getBooleanTypeDescription()));
  List<AttributeValueType> values = new ArrayList<>();
  attrData.setValues(values);
  return attrData;
}

AttributeFilterType getNumberrangeAttributeDataType(ModelBasedAttribute item, Set<Model> models) {
  AttributeFilterType attrData = new AttributeFilterType();
  attrData.setAttribute(new AttributeDataType(null, item.getModelPropertyName(), item.getTitle(), item.getType(), null));
  List<AttributeValueType> values = new ArrayList<>();
  
  for (Model model : models) {

    Class modelClass = model.getClass();
    Field field = null;
    String fieldName = item.getModelPropertyName();
    try {
      field = modelClass.getField(fieldName);
    } catch (NoSuchFieldException nsfe) {
      throw new RuntimeException(nsfe);
    }

    Long value = null;
    try {
      value = ((Long)field.get(model)).longValue();
    } catch (IllegalAccessException iae) {
      throw new RuntimeException(iae);
    }
    values.add(new AttributeValueType(null, null, null, value, null));
  }
  attrData.setValues(values);
  return attrData;
}
    
}
