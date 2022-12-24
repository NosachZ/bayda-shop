package com.baydashop.model;

public class AttributeValueType {
    
    private Long id;
    private Long attributeId;
    private String stringValue;
    private Long numberValue;
    private Boolean booleanValue;

    public AttributeValueType(Long id, Long attributeId, String stringValue, Long numberValue, Boolean booleanValue){
        this.id = id;
        this.attributeId = attributeId;
        this.stringValue = stringValue;
        this.numberValue = numberValue;
        this.booleanValue = booleanValue;
    };

    // getters/setters
    public Long getId(){
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getAttributeId(){
        return this.attributeId;
    }

    public void setAttributeId(Long attributeId) {
        this.attributeId = attributeId;
    }

    public String getStringValue(){
        return this.stringValue;
    }

    public void setStringValue(String stringValue) {
        this.stringValue = stringValue;
    }

    public Long getNumberValue(){
        return this.numberValue;
    }

    public void setNumberValue(Long numberValue) {
        this.numberValue = numberValue;
    }

    public Boolean getBooleanValue(){
        return this.booleanValue;
    }

    public void setBooleanValue(Boolean booleanValue) {
        this.booleanValue = booleanValue;
    }
}
