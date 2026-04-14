export interface Documento{
    id: number;
    manual_id: number;
    nombre_documento: string;
    descripcion_documento: string;
    archivo_path: string;
    fecha_oficial: string;
    legajo_id: number;
    created_at?: string;
    updated_at?: string;
}