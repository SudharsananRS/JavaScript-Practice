CREATE TABLE `student` (
  `student_Id` varchar[25] PRIMARY KEY,
  `name` varchar[25] NOT NULL,
  `email` varchar[25] UNIQUE,
  `contact_number` number NOT NULL,
  `address` varchar[50],
  `degree` varchar[25],
  `dob` date,
  `passoutyear` number,
  `course_id` number,
  `batch_id` varchar(255),
  `placement_eligible` varchar(255),
  `attendance_percentage` number,
  `course_completed` varchar(255),
  `job_offers` number,
  `mentor` number
);

CREATE TABLE `batch` (
  `batch_id` number PRIMARY KEY,
  `start_date` date,
  `mentor_id` number,
  `student_Id` number,
  `no_class_completed` number,
  `no_mock_interview_completed` number,
  `primary` key(batch_id)
);

CREATE TABLE `cource` (
  `cource_id` number PRIMARY KEY,
  `course_name` varchar[25] NOT NULL,
  `fees` number,
  `duration` number
);

CREATE TABLE `mentor` (
  `staff_id` number PRIMARY KEY,
  `contact_number` number NOT NULL,
  `email` varchar[25] UNIQUE,
  `mentor_rating` number,
  `salary` number,
  `qualification` varchar[25],
  `no_of_yrs_exp` number,
  `ongoing_batch` number,
  `primary` key(staff_id)
);

CREATE TABLE `task` (
  `task_number` number,
  `course_id` number,
  `completed_ind` varchar(255),
  `reviewed_by` number,
  `submitted_by` number,
  `score` number,
  `document_url` varchar[55]
);

CREATE TABLE `class` (
  `class_no` number,
  `mentor_id` number,
  `batch_id` number,
  `completed_y_or_n` varchar(255),
  `mentor_rating` number,
  `recording_links` varchar[50],
  `register_link` varchar[50],
  `student_attended` number
);

CREATE TABLE `mock_interview` (
  `student_id` number,
  `mentor_id` number,
  `score` number,
  `recordings` varchar[50],
  `interview_number` number
);

CREATE TABLE `placement` (
  `offer_id` number PRIMARY KEY,
  `company` varchar[25],
  `package` number,
  `eligibility` varchar[25],
  `no_of_openings` number,
  `last_date_apply` date,
  `interview_date` date,
  `placement_completed` varchar(255),
  `student_placed` number
);

CREATE TABLE `query` (
  `query_id` number PRIMARY KEY,
  `raised_by` number,
  `assigned` varchar(255),
  `assigned_to` number,
  `description` varchar[250],
  `subject` varchar[50],
  `resolution` varchar[50],
  `resolved` varchar[10],
  `raised_date` date,
  `resolved_date` date,
  `reopen_ind` varchar(255)
);

CREATE TABLE `leave_req` (
  `req_id` number PRIMARY KEY,
  `raised_by` number,
  `reason` varchar[150],
  `approved_ind` varchar(255),
  `from_date` date,
  `to_date` date,
  `no_of_days` number
);

CREATE TABLE `syllabus` (
  `syllabus_id` number PRIMARY KEY,
  `course_id` number,
  `download_url` varchar[250]
);

CREATE TABLE `certificate` (
  `certificate_id` number PRIMARY KEY,
  `student_id` number,
  `certificate_url` varchar[50]
);

ALTER TABLE `batch` ADD FOREIGN KEY (`batch_id`) REFERENCES `student` (`batch_id`);

ALTER TABLE `cource` ADD FOREIGN KEY (`cource_id`) REFERENCES `student` (`course_id`);

ALTER TABLE `mentor` ADD FOREIGN KEY (`staff_id`) REFERENCES `student` (`mentor`);

ALTER TABLE `placement` ADD FOREIGN KEY (`offer_id`) REFERENCES `student` (`job_offers`);

ALTER TABLE `mentor` ADD FOREIGN KEY (`staff_id`) REFERENCES `batch` (`mentor_id`);

ALTER TABLE `student` ADD FOREIGN KEY (`student_Id`) REFERENCES `batch` (`student_Id`);

ALTER TABLE `batch` ADD FOREIGN KEY (`batch_id`) REFERENCES `mentor` (`ongoing_batch`);

ALTER TABLE `cource` ADD FOREIGN KEY (`cource_id`) REFERENCES `task` (`course_id`);

ALTER TABLE `mentor` ADD FOREIGN KEY (`staff_id`) REFERENCES `task` (`reviewed_by`);

ALTER TABLE `student` ADD FOREIGN KEY (`student_Id`) REFERENCES `task` (`submitted_by`);

ALTER TABLE `mentor` ADD FOREIGN KEY (`staff_id`) REFERENCES `class` (`mentor_id`);

ALTER TABLE `batch` ADD FOREIGN KEY (`batch_id`) REFERENCES `class` (`batch_id`);

ALTER TABLE `student` ADD FOREIGN KEY (`student_Id`) REFERENCES `mock_interview` (`student_id`);

ALTER TABLE `mentor` ADD FOREIGN KEY (`staff_id`) REFERENCES `mock_interview` (`mentor_id`);

ALTER TABLE `student` ADD FOREIGN KEY (`student_Id`) REFERENCES `placement` (`student_placed`);

ALTER TABLE `student` ADD FOREIGN KEY (`student_Id`) REFERENCES `query` (`raised_by`);

ALTER TABLE `mentor` ADD FOREIGN KEY (`staff_id`) REFERENCES `query` (`assigned_to`);

ALTER TABLE `student` ADD FOREIGN KEY (`student_Id`) REFERENCES `leave_req` (`raised_by`);

ALTER TABLE `syllabus` ADD FOREIGN KEY (`course_id`) REFERENCES `cource` (`cource_id`);

ALTER TABLE `student` ADD FOREIGN KEY (`student_Id`) REFERENCES `certificate` (`student_id`);
