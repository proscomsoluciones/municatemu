# Guía de Uso del Panel CMS para Funcionarios Municipales
## Ilustre Municipalidad de Catemu

Esta guía está destinada al equipo de funcionarios de la Municipalidad de Catemu para publicar y administrar los contenidos del portal web oficial (`www.municatemu.cl`).

---

## 1. Roles de Usuario y Flujo de Aprobación
Para dar cumplimiento a los estándares institucionales y auditoría de ciberseguridad (Ley N° 21.663), existen tres roles con permisos delimitados:

1. **Redactor**: Puede crear borradores de noticias, trámites y documentos. No tiene permiso para publicar directamente.
2. **Aprobador**: Revisa los borradores de los redactores, verifica que las imágenes tengan texto alternativo (ALT) obligatorio y aprueba la publicación.
3. **Administrador**: Administra usuarios, configuraciones globales y avisos de emergencia.

> **Importante:** Ningún contenido sale al público sin la aprobación previa de un usuario con rol de **Aprobador**.

---

## 2. Cómo Publicar una Noticia o Subvención Municipal

1. Acceda al panel administrativo en `https://admin.municatemu.cl`.
2. Diríjase a la sección **Noticias** -> **Crear Nueva**.
3. Complete los siguientes campos obligatorios:
   - **Título**: Título claro en español.
   - **Categoría**: Seleccione (Convocatorias, Deportes, Cultura, Obras, Salud, Educación o Avisos).
   - **Imagen**: Suba una foto de buena resolución.
   - **Texto Alternativo (ALT) OBLIGATORIO**: Describa en palabras lo que se observa en la imagen (por ejemplo: *"Vecinas y vecinos en reunión del club de adulto mayor en centro social de Catemu"*). **El sistema no permitirá guardar si este campo queda en blanco (Cumplimiento WCAG 2.1 AA)**.
   - **Cuerpo**: Redacte el texto detallado.
4. Guardar como **Borrador**. El usuario Aprobador recibirá la notificación para revisar y publicar.

---

## 3. Cómo Subir un Documento Oficial (Decretos, Ordenanzas, PLADECO)

1. Diríjase a la sección **Documentos** -> **Crear Nuevo**.
2. Complete los campos:
   - **Título del documento**: Ejemplo: *"Decreto Exento N° 1420 - Modificación Presupuestaria"*.
   - **Tipo**: Seleccione (Decreto, Ordenanza, Rol, Cuenta Pública o PLADECO).
   - **Archivo PDF**: Suba el archivo. El sistema **elimina automáticamente los metadatos ocultos** del PDF al guardarlo.
   - **¿Contiene datos personales? (Ley 21.719)**: Marque esta casilla solo si el documento contiene datos tributarios o nóminas de personas.
3. **Advertencia Ley 21.719**: Si marca la casilla de datos personales, el sistema solicitará indicar una **Fecha de Retiro Programado** para que el documento sea despublicado automáticamente una vez cumplido el plazo legal de exhibición.

---

## 4. Edición de Datos Centrales "PENDIENTE"
Los datos de Dirección Central, Horario de Atención y Teléfono Central se gestionan desde la sección **Configuración Global**. Cuando se confirmen los datos definitivos por la Alcaldía, el Administrador debe ingresar y reemplazar las etiquetas `PENDIENTE` por los textos oficiales.
