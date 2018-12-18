<?xml version="1.0" encoding="UTF-8"?>
<Workflow xmlns="http://soap.sforce.com/2006/04/metadata">
    <alerts>
        <fullName>Compensation_Approved_Email_Notification</fullName>
        <description>Compensation Approved Email Notification</description>
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
            <field>Employee__c</field>
            <type>contactLookup</type>
        </recipients>
        <senderType>CurrentUser</senderType>
        <template>unfiled$public/Compensation_Email_Template</template>
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
        <fullName>Compensation_Rejected</fullName>
        <field>Status__c</field>
        <literalValue>REJECTED</literalValue>
        <name>Compensation Rejected</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Literal</operation>
        <protected>false</protected>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Compensation_Submitted</fullName>
        <field>Status__c</field>
        <literalValue>APPROVED</literalValue>
        <name>Compensation Submitted</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Literal</operation>
        <protected>false</protected>
    </fieldUpdates>
    <rules>
        <fullName>Compensation Email Notification</fullName>
        <actions>
            <name>Compensation_Email_Notification_Alert</name>
            <type>Alert</type>
        </actions>
        <active>true</active>
        <criteriaItems>
            <field>Compensation__c.Location__c</field>
            <operation>equals</operation>
            <value>Uruguay</value>
        </criteriaItems>
        <description>The user will receive a email notification every time a Compensation with Uruguay location is 
 created.</description>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
    </rules>
</Workflow>
