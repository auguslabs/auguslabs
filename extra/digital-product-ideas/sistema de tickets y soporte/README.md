## Sistema de tickets y soporte (Email/WhatsApp)

### Vision general
- Centralizar atencion al cliente desde Email y WhatsApp en una sola bandeja.
- Reducir tiempos de respuesta y perdida de mensajes.
- Dar visibilidad de estado, historial y responsables por ticket.

### Problema que resuelve
- Mensajes dispersos en canales distintos.
- Falta de seguimiento y trazabilidad.
- Dificil medir calidad del soporte.

### Propuesta de valor
- "Todo tu soporte en un solo lugar, sin complejidad."
- Setup rapido y facil para negocios pequenos.

### MVP (alcance minimo viable)
- Bandeja unificada (Email + WhatsApp).
- Creacion automatica de tickets por mensaje entrante.
- Estados basicos (nuevo, en progreso, resuelto).
- Asignacion de ticket a un agente.
- Notas internas por ticket.
- Plantillas de respuesta.
- Historial por cliente.

### Funcionalidades v1.1
- Etiquetas y filtros.
- Busqueda rapida por cliente y ticket.
- Reportes basicos (tiempo de primera respuesta, tickets abiertos).
- SLA simple (recordatorio si no se responde en X horas).

### Roadmap alto nivel
- Fase 1: MVP interno con 1 canal.
- Fase 2: Bandeja multi-canal (Email + WhatsApp).
- Fase 3: Automatizaciones simples (respuestas y asignaciones).
- Fase 4: Analitica y reportes avanzados.

### Hipotesis a validar
- Los negocios pequenos pagaran por centralizar soporte.
- La simplicidad y rapidez de uso son mas valiosas que funciones avanzadas.
- WhatsApp es el canal principal y justifica el producto.

### Perfil de cliente ideal
- Negocios con 2-10 personas atendiendo clientes.
- Servicios locales y ecommerce pequenos.
- Alto volumen de consultas diarias.

### Metricas iniciales
- Tiempo promedio de primera respuesta.
- % tickets resueltos en 24h.
- Tickets por canal.
- Retencion mensual.

---

## Estandar interno: ciclo de vida (5 fases)

### 1) Descubrimiento y validacion
- Objetivo: definir problema, cliente ideal y propuesta de valor.
- Salidas: brief, hipotesis, riesgos, criterios de exito.

### 2) Requerimientos y diseno
- Objetivo: definir alcance MVP, flujos y experiencia.
- Salidas: user stories, wireframes, flujo de datos, backlog inicial.

### 3) Desarrollo MVP
- Objetivo: construir el producto minimo usable.
- Salidas: version funcional, integraciones basicas, documentacion tecnica.

### 4) Pruebas y lanzamiento
- Objetivo: validar estabilidad y uso real.
- Salidas: plan de pruebas, beta cerrada, ajustes prioritarios.

### 5) Operacion y mejora
- Objetivo: medir, iterar y escalar.
- Salidas: metricas, roadmap, mejoras continuas.

---

## Arquitectura del MVP (alto nivel)

### Componentes
- Frontend web: bandeja, lista de tickets, detalle y respuestas.
- Backend API: tickets, mensajes, usuarios, clientes, etiquetas.
- Integraciones: WhatsApp API oficial + Email SMTP/IMAP.
- Base de datos: tickets, clientes, mensajes, agentes, eventos.

### Flujo principal
- Mensaje entrante (WhatsApp/Email) -> API -> crea ticket/mensaje.
- Bandeja muestra ticket actualizado en tiempo real (polling simple).
- Agente responde -> API -> envia al canal correspondiente.

### Entidades clave
- Ticket (estado, prioridad, asignado, canal).
- Mensaje (contenido, canal, autor, timestamp).
- Cliente (nombre, contacto, historial).
- Agente (rol, disponibilidad).

### Seguridad minima
- Autenticacion por email/password.
- Roles basicos (admin, agente).
- Logs de actividad por ticket.

### Infraestructura sugerida
- Backend: Node/Express o NestJS.
- DB: PostgreSQL.
- Hosting: Render, Railway o Vercel (API + DB gestionada).

### Siguientes pasos
- Definir flujo exacto de bandeja y estados.
- Elegir proveedor WhatsApp API y costos.
- Crear wireframes del MVP.
