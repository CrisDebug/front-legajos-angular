export interface Anexo{
id: number;
manual_id: number;
nombre_anexo: string;
descripcion?: string | null;
archivo_path: string;
fecha_oficial: string;
documento_id: number;
documento_manual_id?: number | null;
created_at?: string;
updated_at?: string;
}