package com.baydashop.model;

import javax.persistence.*;

@Entity
@Table(name = "model_based_attributes")
public class ModelBasedAttribute {

  @Id
  @GeneratedValue
  private Long id;

  @Column(name = "model_property_name")
  private String modelPropertyName;

  private String title;

  @Enumerated(EnumType.STRING)
  private AttributeType type;

  @Column(name = "boolean_type_description")
  private String booleanTypeDescription;


  //   getters/setters
  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getModelPropertyName() {
    return modelPropertyName;
  }

  public void setModelPropertyName(String modelPropertyName) {
    this.modelPropertyName = modelPropertyName;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public AttributeType getType() {
    return type;
  }

  public void setType(AttributeType type) {
    this.type = type;
  }

  public String getBooleanTypeDescription() {
    return booleanTypeDescription;
  }

  public void setBooleanTypeDescription(String booleanTypeDescription) {
    this.booleanTypeDescription = booleanTypeDescription;
  }
    
}
