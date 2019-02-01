export interface ConfigTemplate {
    TemplateID: string;
    TemplateName: string;
    TemplateItems: ConfigTemplateItem[];
}

export interface ConfigTemplateItem {
    Field: string;
    Value: string;
    Comment: string;
}
