package com.baydashop.model;

public class AttributeDataType {
    private Long id;
    private String name;
    private String title;
    private AttributeType type;
    private String booleanTypeDescription;

    public AttributeDataType(Long id, String name, String title, AttributeType type, String booleanTypeDescription){
        this.id = id;
        this.name = name;
        this.title = title;
        this.type = type;
        this.booleanTypeDescription = booleanTypeDescription;
    };

    public Long getId(){
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName(){
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTitle(){
        return this.title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public AttributeType getType(){
        return this.type;
    }

    public void setType(AttributeType type) {
        this.type = type;
    }

    public String getBooleanTypeDescription(){
        return this.booleanTypeDescription;
    }

    public void setBooleanTypeDescription(String booleanTypeDescription) {
        this.booleanTypeDescription = booleanTypeDescription;
    }
}