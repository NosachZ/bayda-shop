package com.baydashop.model;

import java.util.Set;

import javax.persistence.*;

@Entity
@Table(name = "attribute_values")
public class AttributeValue {

  @Id
  @GeneratedValue
  private Long id;

  @ManyToOne
  @JoinColumn(name = "attribute_id", nullable = false)
  private Attribute attribute;

  @Column(name = "string_value")
  private String stringValue;

  @Column(name = "number_value")
  private Long numberValue;

  @Column(name = "boolean_value")
  private Boolean booleanValue;

  @ManyToMany(mappedBy = "values", 
  cascade = {
      CascadeType.PERSIST,
      CascadeType.MERGE
  })
  private Set<Model> models;


  //   getters/setters
  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public Attribute getAttribute() {
    return attribute;
  }

  public void setAttribute(Attribute attribute) {
    this.attribute = attribute;
  }

  public String getStringValue() {
    return stringValue;
  }

  public void setStringValue(String stringValue) {
    this.stringValue = stringValue;
  }

  public Long getNumberValue() {
    return numberValue;
  }

  public void setNumberValue(Long numberValue) {
    this.numberValue = numberValue;
  }

  public Boolean getBooleanValue() {
    return booleanValue;
  }

  public void setBooleanValue(Boolean booleanValue) {
    this.booleanValue = booleanValue;
  }
    
}
