<?xml version="1.0" encoding="UTF-8"?>
<Workflow xmlns="http://soap.sforce.com/2006/04/metadata">
    <alerts>
        <fullName>Compensation_Approval_Email_Notification</fullName>
        <description>Compensation Approval Email Notification</description>
        <protected>false</protected>
        <recipients>
            <field>LastModifiedById</field>
            <type>userLookup</type>
        </recipients>
        <senderType>CurrentUser</senderType>
        <template>unfiled$public/Compensation_Approval_Approved</template>
    </alerts>
    <alerts>
        <fullName>Compensation_Email_Notification_Alert</fullName>
        <description>Compensation Email Notification Alert</description>
        <protected>false</protected>
        <recipients>
            <field>LastModifiedById</field>
            <type>userLookup</type>
        </recipients>
        <senderType>CurrentUser</senderType>
        <template>unfiled$public/Compensation_Email_Notification</template>
    </alerts>
    <alerts>
        <fullName>Compensation_Rejected_Email_Notification</fullName>
        <description>Compensation Rejected Email Notification</description>
        <protected>false</protected>
        <recipients>
            <field>LastModifiedById</field>
            <type>userLookup</type>
        </recipients>
        <senderType>CurrentUser</senderType>
        <template>unfiled$public/Compensation_Approval_Rejected</template>
    </alerts>
    <fieldUpdates>
        <fullName>Update_Status_Approval</fullName>
        <field>Status__c</field>
        <literalValue>APPROVED</literalValue>
        <name>Update Status Approval</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Literal</operation>
        <protected>false</protected>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Update_Status_Rejection</fullName>
        <field>Status__c</field>
        <literalValue>REJECTED</literalValue>
        <name>Update Status Rejection</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Literal</operation>
        <protected>false</protected>
    </fieldUpdates>
</Workflow>
